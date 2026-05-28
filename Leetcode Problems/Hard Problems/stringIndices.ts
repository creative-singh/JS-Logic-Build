// Question Link: https://leetcode.com/problems/longest-common-suffix-queries
// 3093. Longest Common Suffix Queries

function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
    let trie = {};

    for (let [i, w] of wordsContainer.entries()) {
        let node = trie;
        w = w.split('').reverse().join('');

        if (!("val" in node) || w.length < node["val"][1])
            node["val"] = [i, w.length];

        for (const ch of w) {
            node = node[ch] ??= {};
            if (!("val" in node) || w.length < node["val"][1])
                node["val"] = [i, w.length];
        }
    }

    let ans = [];
    for (let [i, w] of wordsQuery.entries()) {
        let node = trie;
        w = w.split('').reverse().join('');
        for (const ch of w) {
            if (!(ch in node)) break;
            node = node[ch];
        }
        ans.push(node['val'][0]);
    }
    return ans;
};
