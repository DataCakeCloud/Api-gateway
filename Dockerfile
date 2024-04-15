#stage runtime image
FROM swr.ap-southeast-3.myhuaweicloud.com/shareit-common/java-base:oracle-jdk-1.8.0_202

# copy run jar file
COPY ds_gateway_web/target/*.jar /data/code/
COPY ds_gateway_web/run.sh  /data/code/

RUN sudo chmod o+x /data/code/run.sh    && \
    sudo mkdir -p /data/logs/gc         && \
    sudo chown -R ${AppUser}:${AppGroup} /data

# set workdir
WORKDIR /data

CMD ["/bin/bash", "-c", "bash /data/code/run.sh start $Env"]
