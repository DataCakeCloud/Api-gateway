
CREATE DATABASE IF NOT EXISTS `ds_api_gateway` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `ds_api_gateway`;


CREATE TABLE IF NOT EXISTS `whitelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(50) NOT NULL,
  `url` varchar(250) NOT NULL COMMENT '白名单url',
  `create_by` varchar(50) DEFAULT NULL COMMENT '创建人员',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(50) DEFAULT NULL COMMENT '更新者',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `domain_url` (`domain`,`url`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='访问url白名单';


CREATE TABLE IF NOT EXISTS `domain` (
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='域名映射关系';


CREATE TABLE IF NOT EXISTS `operate_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT '' COMMENT '用户ID',
  `tenant_info` varchar(4000) NOT NULL,
  `source` varchar(100) DEFAULT '' COMMENT '来源',
  `trace_id` varchar(50) DEFAULT '' COMMENT '日志ID',
  `type` varchar(10) DEFAULT '' COMMENT '请求类型',
  `uri` varchar(256) DEFAULT '' COMMENT '请求路径',
  `app_trace_id` varchar(50) DEFAULT '',
  `params` text COMMENT '请求参数',
  `result_code` varchar(3) DEFAULT '' COMMENT '响应状态码',
  `result_message` text,
  `result_data` text,
  `cost_time` bigint(20) DEFAULT '0' COMMENT '耗时，单位毫秒',
  `request_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '请求时间',
  `response_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '返回时间',
  PRIMARY KEY (`id`),
  KEY `user_name` (`user_name`),
  KEY `type` (`type`),
  KEY `uri` (`uri`),
  KEY `result_code` (`result_code`),
  KEY `request_time` (`request_time`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='操作日志表';

CREATE TABLE IF NOT EXISTS `user_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT '' COMMENT '用户',
  `tenant_name` varchar(255) DEFAULT NULL COMMENT '租户名',
  `tenant_id` int(20) NOT NULL COMMENT '租户id',
  `user_info` varchar(768) DEFAULT '' COMMENT '用户信息',
  `token` varchar(768) DEFAULT NULL,
  `create_by` varchar(50) DEFAULT NULL COMMENT '创建者',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(50) DEFAULT NULL COMMENT '更新者',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_token` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `version` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `version` varchar(100) NOT NULL COMMENT '任务版本号',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='任务版本';
