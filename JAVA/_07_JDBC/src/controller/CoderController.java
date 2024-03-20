package controller;

import entity.Coder;
import model.CoderModel;

import javax.swing.*;
import java.awt.datatransfer.StringSelection;
import java.util.ArrayList;

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
            list += objCoder.toString() + "\n";
        }
        JOptionPane.showMessageDialog(null, list);
    }

    public void insert() {
        Coder coder = new Coder();
        String name = JOptionPane.showInputDialog("Type name coder");
        int age = Integer.parseInt(JOptionPane.showInputDialog("Type age coder"));
        String clan = JOptionPane.showInputDialog("Type clan coder");

        coder.setName(name);
        coder.setAge(age);
        coder.setClan(clan);

        coder = (Coder) this.objCoderModel.insert(coder);
        JOptionPane.showMessageDialog(null, coder);
    }

    public void delete() {
        String listCoderString = "CODER LIST\n";
        for (Object obj : this.objCoderModel.findAll()) {
            Coder objCoder = (Coder) obj;
            listCoderString += objCoder.toString() + "\n";
        }
        int confirm = 1;
        int idDelete = Integer.parseInt(JOptionPane.showInputDialog(listCoderString + "Enter the ID of the coder to delete: "));
        Coder objCoder = (Coder) this.objCoderModel.findById(idDelete);

        if (objCoder == null) {
            JOptionPane.showMessageDialog(null, "Coder not found.");
        } else {
            confirm = JOptionPane.showConfirmDialog(null, "Are your sure want to delete the coder: \n" + objCoder.toString());
            if (confirm == 0) {
                this.objCoderModel.delete(objCoder);
            }
        }
    }

    public void update() {
        String listCoderString = "CODER LIST\n";
        for (Object obj : this.objCoderModel.findAll()) {
            Coder objCoder = (Coder) obj;
            listCoderString += objCoder.toString() + "\n";
        }
        int confirm = 1;
        int idUpdate = Integer.parseInt(JOptionPane.showInputDialog(listCoderString + "Enter the ID of the coder to update: "));
        Coder objCoder = (Coder) objCoderModel.findById(idUpdate);

        if (objCoder == null) {
            JOptionPane.showMessageDialog(null, "Coder not found.");
        } else {
            confirm = JOptionPane.showConfirmDialog(null, "Are your sure want to update the coder: \n" + objCoder.toString());
            if (confirm == 0) {
                objCoder.setAge(Integer.parseInt(JOptionPane.showInputDialog("Type new age: ")));
                objCoder.setName(JOptionPane.showInputDialog("Type new name: "));
                objCoder.setClan(JOptionPane.showInputDialog("Type new clan: "));
                objCoderModel.update(objCoder);
            }
        }
        /* Coder coder = new Coder();
        getAll();
        int idUpdate2 = Integer.parseInt(JOptionPane.showInputDialog("Type Id upDate"));
        String name = JOptionPane.showInputDialog("Type new name coder");
        int age = Integer.parseInt(JOptionPane.showInputDialog("Type new age coder"));
        String clan = JOptionPane.showInputDialog("Type new clan coder");
        coder.setName(name);
        coder.setClan(clan);
        coder.setAge(age);
        coder.setId(idUpdate2);

        Object obj = (Object) coder;

        objCoderModel.update(obj);*/
    }
    public void getByN() {
        String search = JOptionPane.showInputDialog("Enter the name you want to search ");
        String listCoderString = "CODER LIST\n";
        if (!this.objCoderModel.getByName(search).isEmpty()) {
            for (Coder coder : this.objCoderModel.getByName(search)) {
                listCoderString += coder.toString() + "\n";
            }
            JOptionPane.showMessageDialog(null, "Result of search...\n" + listCoderString);
        } else {
            JOptionPane.showMessageDialog(null,"No results found");
        }
    }
}
