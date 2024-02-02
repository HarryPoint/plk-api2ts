// 生产异常类型编辑DTO
export interface I生产异常类型编辑DTO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 类型名称
    name: string;
    // 类型编号
    code: string;
    // 是否应用编码规则
    isCodeRule: string;
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
