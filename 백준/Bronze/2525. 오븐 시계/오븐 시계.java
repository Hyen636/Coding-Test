import java.util.Scanner;
public class Main {
 
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		
		int H = in.nextInt();
		int M = in.nextInt();
        int C = in.nextInt();
		
		in.close(); 
        
       int m = 60*H + M + C;
       int hour = (m/60)%24;
       int min = m%60;
       System.out.println(hour + " " + min);
    }
}