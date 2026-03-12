// Question Link: https://leetcode.com/problems/maximize-spanning-tree-stability-with-upgrades
// 3600. Maximize Spanning Tree Stability with Upgrades

var maxStability = function(n, edges, k) {
    let groups = new Int32Array(n).fill(-1);
    
    let totalGroups = n;
    
    let minimum = Infinity;
    
    for(let [v1, v2, w, required] of edges) {
        if(required) {
            if(!union(v1, v2, groups)) {
                return -1;
            }
            --totalGroups;
            minimum = Math.min(minimum, w);
        }
    }
    
    edges.sort((a, b) => b[2]-a[2]);
    
    for(let i = 0; i < edges.length && totalGroups > 1; ++i) {
        let [v1, v2, w, required] = edges[i];
        if(union(v1, v2, groups)) {
            let remaining = totalGroups-1;
            if(remaining <= k) {
                w *= 2;
            }
            
            minimum = Math.min(minimum, w)
            --totalGroups
        }
    }
    
    if(totalGroups > 1) {
        return -1;
    }
    
    return minimum;
};


// return true if we've joined 2 groups, false if they're in the same group.
function union(v1, v2, groups) {
    function findRoot(g) {
        while(groups[g] !== g) {
            g = groups[g];
        }
        
        return g;
    }
    
    
    if(groups[v1] < 0 && groups[v2] < 0) {
        groups[v1] = v1;
        groups[v2] = v1;
        
        return true;
    }
    
    if(groups[v1] >= 0 && groups[v2] >= 0) {
        let g1 = findRoot(groups[v1]);
        let g2 = findRoot(groups[v2]);
        
        groups[g1] = g2;

        return g1 !== g2;
    }
    
    if(groups[v2] >= 0) {
        groups[v1] = v2;
    } else {
        groups[v2] = v1;
    }
    
    
    return true;
}
