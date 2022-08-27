import java.util.Scanner;

public class Main {
 
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		
		int a = in.nextInt();
		int b = in.nextInt();
		int c = in.nextInt();
		int max = 0;
		
		if(a==b && a==c){
            System.out.println(10000+(a*1000));
		}else if(a==b || a==c){
				System.out.println(1000+(a*100));
        }else if(b==c){
            	System.out.println(1000+(b*100));
        }else {
        		if(a>b){
            		if(a>c){
            			max = a;
            		}else {
            			max = c;
            		}
            	}else if(b>a){
            		if(b>c) {
            			max = b;
            		}else {
            			max = c;
            		}
            	}
            	
        System.out.println(max*100);
    }

    }
 
}
