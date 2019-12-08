
const System = bodies => {
    const COM = { id: "COM", target: null };
    const { byId, list } = bodies.reduce((acc, body) => {
        acc.byId[body.id] = body;
        acc.list.push(body);
        return acc;
    }, { byId: { [COM.id]: COM }, list: [ COM ] });
    const system = {
        list, byId,
        findBody(id) {
            return this.byId[id];
        },
        findCommonBody(path1, path2) {
            const p1Ids = path1.reduce((ids, body) => { ids[body.id] = body; return ids; }, {});
            return path2.find(body => p1Ids[body.id]);
        },
        getPath(bodyId, targetId) {
            const body = this.findBody(bodyId);
            if (!body) { return null; }
            const path = [];
            let tmp = body;
            while (tmp = this.findBody(tmp.target)) {
                if (targetId && tmp.id == targetId) { break; }
                path.push(tmp);
            }
            return path;
        }
    };
    return system;
};
const rowToBody = str => {
    const [ target, id ] = str.split(")");
    return { target, id };
};

// part 1
const solver = rows => {
    const bodies = rows.map(rowToBody);
    const system = System(bodies);
    // sum of lengths of all bodies' path to COM
    return system.list.reduce((sum, body) =>
        sum + system.getPath(body.id).length, 0
    );
};

// part 2
const solver2 = (rows, id1, id2) => {
    const bodies = rows.map(rowToBody);
    const system = System(bodies);
    // full paths to COM for body 1 and body 2
    const path1 = system.getPath(id1);
    const path2 = system.getPath(id2);
    // find their first common body
    const firstCommonBody = system.findCommonBody(path1, path2);
    // find paths to common body for body 1 and body 2
    const pathBody1ToCommon = system.getPath(id1, firstCommonBody.id);
    const pathBody2ToCommon = system.getPath(id2, firstCommonBody.id);

    return pathBody1ToCommon.length + pathBody2ToCommon.length;
};


module.exports = {
    solver,
    solver2
};