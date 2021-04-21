public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
        String s1=sc.next();
        int x=sc.nextInt();
        if(x<100 && x>)
        System.out.printf("'%s''%d', s1, x")
        }
        System.out.println("================================");

        }








        We use the integers , , and  to create the following series:

        You are given  queries in the form of , , and . For each query, print the series corresponding to the given , , and  values as a single line of  space-separated integers.

        Input Format

        The first line contains an integer, , denoting the number of queries.
        Each line  of the  subsequent lines contains three space-separated integers describing the respective , , and  values for that query.

        Constraints

        Output Format

        For each query, print the corresponding series on a new line. Each series must be printed in order as a single line of  space-separated integers.

        Sample Input

        2
        0 2 10
        5 3 5
        Sample Output

        2 6 14 30 62 126 254 510 1022 2046
        8 14 26 50 98
        Explanation

        We have two queries:

        We use , , and  to produce some series :

        ... and so on.

        Once we hit , we print the first ten terms as a single line of space-separated integers.

        We use , , and  to produce some series :

        We then print each element of our series as a single line of space-separated values.

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int c = a;
            for(int j=0;j<n;j++){
                c += Math.pow(2, j)*b;
                System.out.printf("%s ",c);
            }
            System.out.println();
        }
        in.close();
    }
}

    Java has 8 primitive data types; char, boolean, byte, short, int, long, float, and double. For this exercise, we'll work with the primitives used to hold integer values (byte, short, int, and long):

        A byte is an 8-bit signed integer.
        A short is a 16-bit signed integer.
        An int is a 32-bit signed integer.
        A long is a 64-bit signed integer.
        Given an input integer, you must determine which primitive data types are capable of properly storing that input.

        To get you started, a portion of the solution is provided for you in the editor.

        Reference: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

        Input Format

        The first line contains an integer, , denoting the number of test cases.
        Each test case, , is comprised of a single line with an integer, , which can be arbitrarily large or small.

        Output Format

        For each input variable  and appropriate primitive , you must determine if the given primitives are capable of storing it. If yes, then print:

        n can be fitted in:
        * dataType
        If there is more than one appropriate data type, print each one on its own line and order them by size (i.e.: ).

        If the number cannot be stored in one of the four aforementioned primitives, print the line:

        n can't be fitted anywhere.
        Sample Input

        5
        -150
        150000
        1500000000
        213333333333333333333333333333333333
        -100000000000000
        Sample Output

        -150 can be fitted in:
        * short
        * int
        * long
        150000 can be fitted in:
        * int
        * long
        1500000000 can be fitted in:
        * int
        * long
        213333333333333333333333333333333333 can't be fitted anywhere.
        -100000000000000 can be fitted in:
        * long
        Explanation

        can be stored in a short, an int, or a long.

        is very large and is outside of the allowable range of values for the primitive data types discussed in this problem.


class Solution{
    public static void main(String []argh)
    {
        int intMin = (int) Math.pow(-2, 31);
        int intMax = (int) Math.pow(2,31) - 1;
        int longMin = (int) Math.pow(-2, 63);
        int longMax = (int) Math.pow(2, 63) - 1;


        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();

        for(int i=0;i<t;i++)
        {

            try
            {
                long x=sc.nextLong();
                System.out.println(x+" can be fitted in:");
                if(x>=-128 && x<=127){
                    System.out.println("* byte");
                }
                if(x>=Short.MIN_VALUE && x<=Short.MAX_VALUE){
                    System.out.println("* short");
                }
                if(x>=Integer.MIN_VALUE && x<=Integer.MAX_VALUE){
                    System.out.println("* int");
                }
                if(x>=Long.MIN_VALUE && x<=Long.MAX_VALUE){
                    System.out.println("* long");
                }
                //Complete the code
            }
            catch(Exception e)
            {
                System.out.println(sc.next()+" can't be fitted anywhere.");
            }

        }
    }
}






