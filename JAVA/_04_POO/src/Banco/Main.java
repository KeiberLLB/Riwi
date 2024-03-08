package Banco;

import Banco.servicio.Registro;

import javax.swing.*;

public class Main {
    public Main objMain = new Main();

    public void main(String[] args) {
        objMain.opciones();
    }

    Registro nuevoRegistro = new Registro();
    public void menu() {
        int option =0;
        do {
            try {
                option = Integer.parseInt(JOptionPane.showInputDialog(null, "MENÚ PRINCIPAL \n" +
                        "1. Registrar Usuario\n" +
                        "2. Inicio Sesion\n"+
                        "3. Salir"
                ));
                switch (option){
                    case 1:

                        nuevoRegistro = new Registro();

                        break;
                    case 2:

                        break;
                }
            } catch (Exception e) {
                JOptionPane.showMessageDialog(null, "Caracteres no validos");
            }
        } while (option != 3);

    }

    public void opciones() {
        int opcion = 0;
        do {
            objMain.menu();
            //LEe dato de opcion
            //opcion= JOptionPane
            switch (opcion) {
                case 1:

                    break;
                default:
                    System.out.println("Opcion no valida");
                    break;
            }
        } while (opcion != 3);
    }
}
