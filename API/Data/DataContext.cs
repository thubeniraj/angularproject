﻿
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        //Constructor
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        // Property
        public DbSet<AppUser> Users { get; set; }

    }
}