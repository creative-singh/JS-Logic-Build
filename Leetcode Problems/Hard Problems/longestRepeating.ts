// Question Link: https://leetcode.com/problems/longest-substring-of-one-repeating-character
// 2213. Longest Substring of One Repeating Character

function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
    const n = s.length, tree = new Array(4 * n);;
    const str = s.split("");

    function createNode(
        leftChar,
        rightChar,
        len,
        left,
        right,
        best
    ) {
        return {
            leftChar,
            rightChar,
            len,
            left,
            right,
            best
        };
    }

    function merge(a, b) {
        const res = createNode(
            a.leftChar,
            b.rightChar,
            a.len + b.len,
            a.left,
            b.right,
            Math.max(a.best, b.best)
        );

        if (a.rightChar === b.leftChar) {
            const combined = a.right + b.left;

            res.best = Math.max(
                res.best,
                combined
            );

            if (a.left === a.len) {
                res.left = a.len + b.left;
            }

            if (b.right === b.len) {
                res.right = a.right + b.len;
            }
        }

        return res;
    }

    function build(node, l, r) {
        if (l === r) {
            tree[node] = createNode(
                str[l],
                str[l],
                1,
                1,
                1,
                1
            );
            return;
        }

        const mid = Math.floor((l + r) / 2);

        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    function update(node, l, r, index) {
        if (l === r) {
            tree[node] = createNode(
                str[index],
                str[index],
                1,
                1,
                1,
                1
            );
            return;
        }

        const mid = Math.floor((l + r) / 2);

        if (index <= mid) {
            update(node * 2, l, mid, index);
        } else {
            update(node * 2 + 1, mid + 1, r, index);
        }

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    // Build initial Segment Tree
    build(1, 0, n - 1);

    let res = [];

    for (let i = 0; i < queryIndices.length; i++) {
        const index = queryIndices[i];

        str[index] = queryCharacters[i];

        update(1, 0, n - 1, index);

        res.push(tree[1].best);
    }

    return res;
};
