// 分页_3
export interface I分页_3 {
    // 关联表单编码
    flowPathCode: string;
    // 当前页面
    pageNo: number;
    // 显示序列编码列表
    showSerialCodeList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 显示字段编码
    showFieldCode: string;
    // 全局搜索关键字
    globalSearch: string;
}
// JSONResult«List«FormCascadeQueryResultVO»»
export interface IJSONResultListFormCascadeQueryResultVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: FormCascadeQueryResultVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
