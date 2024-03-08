package Banco.entidad;

import java.util.ArrayList;

public class Cuenta {
    private ArrayList<Cuenta> cuentas;
    private int saldoCuenta;
    private int id;
    private int idUsuario;

    public Cuenta() {
    }

    public Cuenta(int saldoCuenta, int id, int idUsuario) {
        this.saldoCuenta = saldoCuenta;
        this.id = id;
        this.idUsuario = idUsuario;
    }

    public ArrayList<Cuenta> getCuentas() {
        return cuentas;
    }

    public void setCuentas(ArrayList<Cuenta> cuentas) {
        this.cuentas = cuentas;
    }

    public int getSaldoCuenta() {
        return saldoCuenta;
    }

    public void setSaldoCuenta(int saldoCuenta) {
        this.saldoCuenta = saldoCuenta;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    //Funcionalidades de la cuenta

    public void nuevaCuenta(Cuenta cuenta){
        cuentas.add(cuenta);
    }

}
