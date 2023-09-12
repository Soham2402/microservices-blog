# from flask_migrate import Migrate, MigrateCommand
# from flask_script import manager

# from main import app, db

# manager = Migrate(app,db)
# manager = Manager(app)
# manager.add_command('db',MigrateCommand)


# if __name__ == '__main__':
#     manager.run()

#!/bin/bash
export FLASK_APP=main.py
# Step 1: Generate a migration
flask db init

flask db migrate -m "Initial migration"

# Step 2: Apply the migration
flask db upgrade

# Step 3: Print a message
echo "Database migration completed."
