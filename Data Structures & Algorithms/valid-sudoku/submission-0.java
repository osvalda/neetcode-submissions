class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<String>> row = new HashMap<Integer, Set<String>>();
        Map<Integer, Set<String>> col = new HashMap<Integer, Set<String>>();
        Map<Integer, Set<String>> square = new HashMap<Integer, Set<String>>();

        for (int i = 0; i < 9; i++) {
            row.put(i, new HashSet());
            for (int l = 0; l < 9; l++) {
                if ((board[i][l]) == '.') {
                    continue;
                }
                if (row.get(i).contains(board[i][l] + "")) {
                    return false;
                } else
                    row.get(i).add(board[i][l] + "");

                if (col.get(l) == null)
                    col.put(l, new HashSet());

                if (col.get(l).contains(board[i][l] + ""))
                    return false;
                else
                    col.get(l).add(board[i][l] + "");

                int sq = (i / 3) * 3 + (l / 3);
                if (square.get(sq) == null)
                    square.put(sq, new HashSet());

                if (square.get(sq).contains(board[i][l] + ""))
                    return false;
                else
                    square.get(sq).add(board[i][l] + "");
            }
        }

        return true;
    }
}
