请您明确在SQL助手中输入您最终想筛出的字段、操作或者业务描述，一条一条的描述每一个限制条件。
在难以一步到位的情况下，可以先生成一个简单SQL，再逐步增加筛选条件。

### <font class="text-color-16" color="#ff5722">原则</font>：

* 清晰，切忌复杂或歧义，如果有术语，应定义清楚。
*  具体，描述语言应尽量具体，不要抽象活模棱两可。
* 聚焦，问题避免太泛或开放。
* 简洁，避免不必要的描述。
* 相关，主要指主题相关，而且是整个对话期间，不要东一瓢西一瓤。

### <font class="text-color-151" color="#ff5722">示例</font>：

以下示例向您展示如何更高效地使用Chatbot辅助SQL编写：

Q：你好，我有一张数据表，表结构及字段含义如下：

```
CREATE TABLE `ads_dmp`.`dws_ads_server_data_stats` ( `nation` STRING COMMENT '国家', `first_channel` STRING COMMENT '流量源', `is_san` STRING COMMENT '是否为san', `channel_id` STRING COMMENT 'channelid', `channel_name` STRING COMMENT
```


A：你好！这是一张数据表，包含了各种广告投放相关的字段。具体结构和字段含义如下：

```
表名：dws_ads_server_data_stats
数据库名：ads_dmp
字段：
nation：国家
first_channel：流量源
is_san：是否为san
```




Q：我希望你帮我写一个Presto SQL语句，查询目标是上表中package name为com.playojo.www的量级，限制条件有：日期范围从2023年4月1日到2023年4月19日之间；traffic_type 为 4、5或20；最终查询出的字段需要有dt、pkg_name和nation。

A：以下是查询语句：

![](https://huatu.98youxi.com/markdown/work/uploads/upload_8385a6e52a2ca6258afc8bf63197ae7d.png)


这个查询会对目标表进行筛选，找出满足条件的行并对其进行聚合，以dt、pkg_name和nation为分组依据，计算request、response、show、clicks和installs的总量。最终查询出的字段有dt、pkg_name和nation以及各个计数器的总量。

Q：我没有解释清楚“量级”的含义，我想要的是client_uv_pkg、client_success_uv_pkg、server_uv_pkg、valid_click_uv_pkg、repostback、revenue这几个指标的统计量。

A：好的，那么这里是更新后的查询语句：

![](https://huatu.98youxi.com/markdown/work/uploads/upload_42ecce4b371d8cb85b2b929e0f68bcec.png)

这个查询会计算目标表中客户端UV、客户端成功UV、服务器UV、有效点击UV、回传、还原后收入这六个指标的总量，同时满足条件：pkg_name为com.playojo.www，日期范围为2023年4月1日到2023年4月19日之间，traffic_type为4、5或20，并且根据dt、pkg_name和nation分组统计结果。