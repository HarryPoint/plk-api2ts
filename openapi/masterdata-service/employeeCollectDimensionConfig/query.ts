// 用户聚合维度配置查询_1
export interface IUserAggregationDimensionConfigurationQuery1 {
    // 编码
    code: string;
}
// JSONResult«用户聚合维度配置查询»
export interface IJSONResultUserAggregationDimensionConfigurationQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUserAggregationDimensionConfigurationQuery;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 用户聚合维度配置查询
export interface IUserAggregationDimensionConfigurationQuery {
    // 编号
    code: string;
    // 配置信息
    config: any;
}
