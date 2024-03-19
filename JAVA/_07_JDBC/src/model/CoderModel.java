package model;

import database.CRUD;
import database.ConfigDB;
import entity.Coder;

import javax.swing.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CoderModel implements CRUD {


    @Override
    public Object insert(Object obj) {
        //1. Abrir Conexión
        Connection objConnection = ConfigDB.openConnection();
        //2. Castear el objeto a coder
        Coder coder = (Coder) obj;

        try {
            String sql = "insert into coder(name,age,clan) values(?,?,?);";
            PreparedStatement objPreparedStatement = (PreparedStatement) objConnection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
            //asignar los signos de interrogación
            objPreparedStatement.setString(1, coder.getName());
            objPreparedStatement.setInt(2, coder.getAge());
            objPreparedStatement.setString(3, coder.getClan());
            //a continuación; objPreparadStatement.execute() solo ejecuta la linea
            objPreparedStatement.execute();
            ResultSet objResult = (ResultSet) objPreparedStatement.getGeneratedKeys();
            while (objResult.next()) {
                coder.setId(objResult.getInt(1));
            }
            //cerramos el objPreparedStatement
            objPreparedStatement.close();
            JOptionPane.showMessageDialog(null, "Coder insertion was successful");

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Data Error " + e.getMessage());
        }
        ConfigDB.closeConnection();
        return coder;
    }

    @Override
    public boolean update(Object object) {
        Coder coder = (Coder) object;
        Connection objConnection = ConfigDB.openConnection();

        try {
            String sql = "UPDATE coder SET name = ?, age = ?, clan = ? WHERE (id = ?);";
            PreparedStatement objPreparedStatement = (PreparedStatement) objConnection.prepareStatement(sql);
            objPreparedStatement.setString(1, coder.getName());
            objPreparedStatement.setInt(2, coder.getAge());
            objPreparedStatement.setString(3, coder.getClan());
            objPreparedStatement.setInt(4, coder.getId());
            objPreparedStatement.executeUpdate();

            JOptionPane.showMessageDialog(null, "Coder update was successful");

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Data Error " + e.getMessage());
        }
        ConfigDB.closeConnection();
        return false;
    }


    @Override
    public boolean delete(int id) {
        Connection objConnection = ConfigDB.openConnection();
        try {
            String sql = "DELETE FROM coder WHERE id=?;";
            PreparedStatement objPreparedStatement = (PreparedStatement) objConnection.prepareStatement(sql);
            objPreparedStatement.setInt(1, id);
            objPreparedStatement.execute();
            objPreparedStatement.close();
            JOptionPane.showMessageDialog(null, "Coder delete was successful");

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Data Error " + e.getMessage());
        }
        ConfigDB.closeConnection();
        return false;
    }

    @Override
    public List<Object> findAll() {
        //1. Abrir la conexión
        Connection objConnection = ConfigDB.openConnection();

        //2. Inicializar la lista donde se guardaran los registros que devuelve la BD
        List<Object> listCoders = new ArrayList<>();

        try {
            //3. Escribir la sentencia SQL
            String sql = "SELECT * FROM coder ORDER BY coder.id ASC;";

            //4. Utilizar PrepareStatement
            PreparedStatement objPreparedStatement = (PreparedStatement) objConnection.prepareStatement(sql);

            //5. Ejecutar el Query o él prepare
            ResultSet objResult = (ResultSet) objPreparedStatement.executeQuery();

            //6. Obtener los resultados
            while (objResult.next()) {
                //Creamos una instancia de coder
                Coder objCoder = new Coder();

                //Llenamos nuestro objeto con lo que devuelve la base de datos (ResultSet)
                objCoder.setId(objResult.getInt("id"));
                objCoder.setName(objResult.getString("name"));
                objCoder.setAge(objResult.getInt("age"));
                objCoder.setClan(objResult.getString("clan"));

                //Finalmente agregar el coder a la lista
                listCoders.add(objCoder);
            }


        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Data acquisition Error");
        }

        //7. Cerramos la conexión
        ConfigDB.closeConnection();
        return listCoders;
    }

    @Override
    public Object findById(int id) {
        return null;
    }
}
