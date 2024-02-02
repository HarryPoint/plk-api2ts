// 准备期编辑DTO
export interface I准备期编辑DTO {
    // id
    id: number;
    // 所属工序id
    processId: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 规则类型
    ruleType: string;
    // 耗时
    takeTime: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
