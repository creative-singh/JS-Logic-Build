// Question Link: https://leetcode.com/problems/find-x-value-of-array-ii
// 3525. Find X Value of Array II

function resultArray(nums: number[], k: number, queries: number[][]): number[] {
    const n = nums.length;

    let prod = new Int32Array(4 * n), cnt = new Int32Array(4 * n * k);

    function build(node, l, r) {
        if (l === r) {
            const remVal = nums[l] % k;
            prod[node] = remVal;
            cnt[node * k + remVal] = 1;
            return;
        }

        const mid = (l + r) >> 1;
        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);
        merge(node, node * 2, node * 2 + 1);
    }

    function merge(node, left, right) {
        const pLeft = prod[left], pRight = prod[right];
        prod[node] = (pLeft * pRight) % k;

        const nodeOffset = node * k, leftOffset = left * k, rightOffset = right * k;

        for (let rem = 0; rem < k; rem++) {
            cnt[nodeOffset + rem] = cnt[leftOffset + rem];
        }

        for (let rem = 0; rem < k; rem++) {
            const newRem = (pLeft * rem) % k;
            cnt[nodeOffset + newRem] += cnt[rightOffset + rem];
        }
    }

    function update(node, l, r, index, value) {
        if (l === r) {
            const remVal = value % k, nodeOffset = node * k;
            prod[node] = remVal;
            for (let i = 0; i < k; i++) {
                cnt[nodeOffset + i] = 0;
            }
            cnt[nodeOffset + remVal] = 1;
            return;
        }

        const mid = (l + r) >> 1;
        if (index <= mid) {
            update(node * 2, l, mid, index, value);
        } else {
            update(node * 2 + 1, mid + 1, r, index, value);
        }

        merge(node, node * 2, node * 2 + 1);
    }

    function query(node, l, r, ql, qr, outProd, outCnt) {
        if (ql <= l && r <= qr) {
            outProd[0] = prod[node];
            const nodeOffset = node * k;
            for (let i = 0; i < k; i++) {
                outCnt[i] = cnt[nodeOffset + i];
            }
            return;
        }

        const mid = (l + r) >> 1;
        if (qr <= mid) {
            query(node * 2, l, mid, ql, qr, outProd, outCnt);
            return;
        }

        if (ql > mid) {
            query(node * 2 + 1, mid + 1, r, ql, qr, outProd, outCnt);
            return;
        }

        const leftProd = new Int32Array(1), leftCnt = new Int32Array(k);
        query(node * 2, l, mid, ql, qr, leftProd, leftCnt);

        const rightProd = new Int32Array(1), rightCnt = new Int32Array(k);
        query(node * 2 + 1, mid + 1, r, ql, qr, rightProd, rightCnt);

        outProd[0] = (leftProd[0] * rightProd[0]) % k;
        for (let rem = 0; rem < k; rem++) {
            outCnt[rem] = leftCnt[rem];
        }
        for (let rem = 0; rem < k; rem++) {
            const newRem = (leftProd[0] * rem) % k;
            outCnt[newRem] += rightCnt[rem];
        }
    }

    build(1, 0, n - 1);

    let res = [], qProd = new Int32Array(1), qCnt = new Int32Array(k);

    for (let i = 0; i < queries.length; i++) {
        const [index, value, start, x] = queries[i];
        nums[index] = value;
        update(1, 0, n - 1, index, value);

        query(1, 0, n - 1, start, n - 1, qProd, qCnt);
        res.push(qCnt[x]);
    }

    return res;
};
