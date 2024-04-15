
CREATE DATABASE `ds-api-gateway`;

DROP TABLE IF EXISTS `ds-api-gateway`.`whitelist`;
# 访问url白名单
CREATE TABLE `ds-api-gateway`.`whitelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(50) NOT NULL,
  `url` varchar(250) NOT NULL COMMENT '白名单url',
  `create_by` varchar(50) DEFAULT NULL COMMENT '创建人员',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(50) DEFAULT NULL COMMENT '更新者',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `domain_url` (`domain`,`url`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='访问url白名单';

DROP TABLE IF EXISTS `ds-api-gateway`.`domain`;
# 域名映射
CREATE TABLE `ds-api-gateway`.`domain` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `domain` varchar(50) DEFAULT NULL COMMENT '需跳转的域名(请求url的第一级目录)',
   `server_url` varchar(250) NOT NULL COMMENT '后端服务url',
   `prefix` varchar(50) NOT NULL,
   `create_by` varchar(50) DEFAULT NULL COMMENT '创建人员',
   `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
   `update_by` varchar(50) DEFAULT NULL COMMENT '更新者',
   `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
   PRIMARY KEY (`id`),
   UNIQUE KEY `domain` (`domain`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='域名映射关系';


DROP TABLE IF EXISTS `ds-api-gateway`.`operate_log`;
CREATE TABLE `ds-api-gateway`.`operate_log` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_name` varchar(50) DEFAULT '' COMMENT '用户ID',
    `source` varchar(100) DEFAULT '' COMMENT '来源',
    `trace_id` varchar(32) DEFAULT '' COMMENT '日志ID',
    `type` varchar(10) DEFAULT '' COMMENT '请求类型',
    `uri` varchar(256) DEFAULT '' COMMENT '请求路径',
    `params` longtext COMMENT '请求参数',
    `result_code` varchar(3) DEFAULT '' COMMENT '响应状态码',
    `result_message` varchar(256) DEFAULT '' COMMENT '响应码不为0时的错误信息',
    `result_data` longtext COMMENT '响应码为0时，返回数据',
    `cost_time` bigint(20) DEFAULT '0' COMMENT '耗时，单位毫秒',
    `request_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '请求时间',
    `response_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '返回时间',
    PRIMARY KEY (`id`),
    KEY `user_name` (`user_name`),
    KEY `type` (`type`),
    KEY `uri` (`uri`),
    KEY `result_code` (`result_code`),
    KEY `request_time` (`request_time`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='操作日志表';


--修改params 类型：
--alter table operate_log modify column params varchar(1024) COMMENT '请求参数';

--修改result_message 类型：
--alter table operate_log modify column result_message text COMMENT '响应码不为0时的错误信息';

--修改result_data 类型：
--alter table operate_log modify column result_data text COMMENT '响应码为0时，返回数据';
