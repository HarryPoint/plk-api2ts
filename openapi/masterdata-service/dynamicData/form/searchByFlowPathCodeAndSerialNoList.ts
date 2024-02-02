// 动态表单查询
export interface I动态表单查询 {
    // 关联表单编码
    flowPathCode: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 显示序列编码列表
    showSerialCodeList: string[];
    // 动态表单查询处理人
    dynamicFormQueryProcessor: 动态表单处理人查询请求;
    // 关联表单详细编码
    flowPathDetailCode: string;
    // 是否主表
    isMasterTable: string;
    // 全局搜索关键字
    globalSearch: string;
}
// JSONResult«DynamicFormQueryOutputVO»
export interface IJSONResultDynamicFormQueryOutputVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: DynamicFormQueryOutputVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
