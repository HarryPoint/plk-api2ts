// JSONResult«List«项目变更单字段响应参数»»
export interface IJSONResultList项目变更单字段响应参数 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目变更单字段响应参数[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目变更单字段响应参数
export interface I项目变更单字段响应参数 {
    // 字段编号
    fieldCode: string;
    // 操作类型
    operateType: string;
    // 旧值
    oldValue: string;
    // 新值
    newValue: string;
    // 子表数据列表
    childList: I项目变更单子表字段扩展参数请求[];
}
// 项目变更单子表字段扩展参数请求
export interface I项目变更单子表字段扩展参数请求 {
    // 行数据id
    dataId: string;
    // 操作类型
    operateType: string;
    // 列数据
    columnData: I项目变更单字段响应参数[];
}
