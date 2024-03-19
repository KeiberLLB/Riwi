package controller;

import entity.Coder;
import model.CoderModel;
import javax.swing.*;

public class CoderController {
    CoderModel objCoderModel;
    //Método para listar todos los coder

    public CoderController() {
        this.objCoderModel = new CoderModel();
    }

    public void getAll() {
        String list = "List Coders\n";
        //Iteramos sobre la lista que devuelve el método find all
        for (Object obj : this.objCoderModel.findAll()) {
            //convertimos o casteamos el objeto tipo Object a un coder
            Coder objCoder = (Coder) obj;
            //concatenamos la información
            list += objCoder.toString()+"\n";
        }
        JOptionPane.showMessageDialog(null,list);
    }
    public void insert(){
        String name = JOptionPane.showInputDialog("Type name coder");
        int age = Integer.parseInt(JOptionPane.showInputDialog("Type age coder"));
        String clan = JOptionPane.showInputDialog("Type clan coder");
        Coder coder = new Coder(name,age,clan);

        coder = (Coder) this.objCoderModel.insert(coder);
        JOptionPane.showMessageDialog(null,coder);
    }
}
