// TSK报表查询DTO_1
export interface ITSK报表查询DTO_1 {
    // 字段搜索
    dataSearchList: 流程数据明细搜索VO[];
    // 当前页面
    pageNo: number;
    // 显示字段序列号
    showFieldSerialNoList: string[];
    // 分页大小
    pageSize: number;
}
// JSONResult«分页信息«TSK报表查询DTO»»
export interface IJSONResult分页信息TSK报表查询DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«TSK报表查询DTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
