const createPathFromThread = (instructions, threadId) => {
    const cursor = { x: 0, y: 0 };
    const instructionExpr = /^([URDL])(\d+)$/;  // direction and distance
    const axisExpr = /[UD]/;                    // x- or y-axis?
    const directionExpr = /[UR]/;               // forward or backward?

    const instructionToPositions = (arr, instruction) => {
        const [ , dir, length ] = instructionExpr.exec(instruction),
            axis = axisExpr.test(dir) ? "y" : "x",
            movement = directionExpr.test(dir) ? 1 : -1;
        // create position key entry for each position caused by the instruction
        for (let idx = 0; idx < length; ++idx) {
            cursor[axis] += movement; // update cursor
            const key = `${ cursor.x }/${ cursor.y }`; // create key for cursor position
            arr.push({ threadId, key, cursor: { ...cursor } });
        }
        return arr;
    };

    return instructions.reduce(instructionToPositions, []);
};

// @return sum of the absolute values for x and y
const getManhattanDistance = ({ x, y }) =>
    [ x, y ].reduce((sum, value) => sum + Math.abs(value), 0);


const findPositions = (positions, path) => {
    path.forEach(position => {
        const { threadId, key, cursor } = position;
        // register position being visited by this thread
        const entry = positions[key];
        if (!entry) { positions[key] = { threadIds: [ threadId ], cursor }; }
        else if (0 > entry.threadIds.indexOf(threadId)) {
            entry.threadIds.push(threadId);
        }
    });
    return positions;
};

const multipleThreadVisits = (intersections, entry) => {
    const { cursor } = entry;
    if (1 < entry.threadIds.length) { intersections.push(cursor); }
    return intersections;
};

const findStepNumberToTarget = (path, targetKey) =>
    path.reduce((tmp, { key }, idx) =>
        key == targetKey ? idx + 1 : tmp, null);

const sumsOfPathsToIntersections = (paths, intersections) => {
    // calculate all summarized distqnces to the intersections
    return intersections.reduce((sums, intersection) => {
        // build string key for this intersection
        const { x, y } = intersection, intersectionKey = `${ x }/${ y }`;
        // add length of all paths to reach this intersection
        const sum = paths.reduce((tmp, path) =>
            tmp + findStepNumberToTarget(path, intersectionKey), 0);
        sums.push(sum);
        return sums;
    }, []);
};


// part 1
const solver = (threads) => {
    const paths = threads.map(createPathFromThread);
    const visitedPositions = Object.values(paths.reduce(findPositions, {}));
    const intersections = visitedPositions.reduce(multipleThreadVisits, []);
    const distances = intersections.map(getManhattanDistance);
    const smallestDistance = Math.min.apply(null, distances);
    return smallestDistance;
};

// part 2
const solver2 = threads => {
    const paths = threads.map(createPathFromThread);
    const visitedPositions = Object.values(paths.reduce(findPositions, {}));
    const intersections = visitedPositions.reduce(multipleThreadVisits, []);
    const pathLengthSums = sumsOfPathsToIntersections(paths, intersections);
    const smallestPathLengthSum = Math.min.apply(null, pathLengthSums);
    return smallestPathLengthSum;
};


module.exports = {
    solver,
    solver2,
};