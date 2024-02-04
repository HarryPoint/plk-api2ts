// 生产标签编辑DTO
export interface I生产标签编辑DTO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 标签名称
    name: string;
    // 标签编号
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