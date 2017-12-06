language: python
python: "2.7"
sudo: false
branches:
  only:
      - quickwin-release
      - quickwin
git:
  depth: 10
before_script: ./build/scripts/setup_credentials.sh
script: 
    - if [ "$TRAVIS_PULL_REQUEST" != "false" ]; 
        then echo "*** Running Dry Run ***"; 
            if [ "$TRAVIS_BRANCH" == "quickwin" ]; 
              then echo "*** Deploying to dryrun1 to validate tests ***"; 
                  ./build/scripts/deploy.sh; 
              else echo "*** validating against UAT ***"; 
                  ./build/scripts/dryrun.sh; 
            fi
        else echo "*** Running Deployment ***"; 
          ./build/scripts/deploy.sh;  
      fi
notifications:
  slack: 
    rooms:
      - santafegroup:f0ACz14ccFYgvF7g61ffyaJt#deployment
  email:
    recipients:
      # - shahin.movahedi@execloud.co.uk
      # - slavko.skular@wonderlab-it.co.uk
      # - k.pintscher@polsource.com 
      # - n.gronowska@polsource.com
      - abid.raqib@santaferelo.com
      - naveen.gurram@santaferelo.com
      - falgun.naker@santaferelo.com
      # - nbudnicka@salesforce.com
    on_success: always # default: change
    on_failure: always # default: always