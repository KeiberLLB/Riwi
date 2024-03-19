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
        Coder coder = new Coder();
        String name = JOptionPane.showInputDialog("Type name coder");
        int age = Integer.parseInt(JOptionPane.showInputDialog("Type age coder"));
        String clan = JOptionPane.showInputDialog("Type clan coder");

        coder.setName(name);
        coder.setAge(age);
        coder.setClan(clan);

        coder = (Coder) this.objCoderModel.insert(coder);
        JOptionPane.showMessageDialog(null,coder);
    }

    public void delete(){
        getAll();
        int idDelete = Integer.parseInt(JOptionPane.showInputDialog( "Type Id"));
        objCoderModel.delete(idDelete);
    }

    public void update(){
        Coder coder = new Coder();
        getAll();
        int idUpdate = Integer.parseInt(JOptionPane.showInputDialog("Type Id upDate"));
        String name = JOptionPane.showInputDialog("Type new name coder");
        int age = Integer.parseInt(JOptionPane.showInputDialog("Type new age coder"));
        String clan = JOptionPane.showInputDialog("Type new clan coder");
        coder.setName(name);
        coder.setClan(clan);
        coder.setAge(age);
        coder.setId(idUpdate);

        Object object = (Object) coder;

        objCoderModel.update(object);
    }
}
