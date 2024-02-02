// 质量追溯报表查询DTO
export interface I质量追溯报表查询DTO {
    // 字段搜索
    dataSearchList: 流程数据明细搜索VO[];
    // 当前页面
    pageNo: number;
    // 显示字段序列号
    showFieldSerialNoList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
