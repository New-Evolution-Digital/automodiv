#! /bin/bash

/bin/bash ./install.sh
/bin/bash ./wait.sh http://localhost:3306 --strict --timeout=1000
/bin/bash ./dev-start.sh