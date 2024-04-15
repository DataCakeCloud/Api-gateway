# DataStudio

## 介绍
```
大数据开发管理平台的数据治理、数据开发、数据服务等功能模块，有各自公开的域名，暴漏在外，容易受到攻击，且需要调用不同的域名访问。
Api Gateway对外提供唯一的数据开发平台域名，统一对用户鉴权，并将请求转发至各功能模块处理。
```

## 其核心功能包括：
*  权限认证
*  *  建立统一的权限认证。
*  接口转发
*  *  统一的域名+接口，进行访问，用户不再根据不同模块，调用不同接口。
*  审计日志
*  *  记录用户的每个请求。
*  服务质量指标上报
*  *  统计每个接口的响应时间，上报至Prometheus。

## Building 

* Git
* Maven (recommend version 3.2.5 and require at least 3.1.1)
* Java 8 or 11 (Java 9 or 10 may work)

```bash
git clone git@gitlab.ushareit.me:bdp/stream/api-gateway.git
cd api-gateway
mvn clean package -DskipTests # this will take up to 3 minutes
```
