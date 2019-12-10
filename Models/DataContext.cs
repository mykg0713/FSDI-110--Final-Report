
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace Lab_2.Models{

    /*
    represents the connection with the DB
    will be used to access different tables(classes)
    to retrieve and store information/records
    */

    public class DataContext : DbContext{

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // specify which model requires to be a table in the DB

        public DbSet<Car> Cars {get; set;}

        // public DbSet<Employee> Employees {get; set;};
        

    }




}