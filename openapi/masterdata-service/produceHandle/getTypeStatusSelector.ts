// JSONResult«List«生产处理类型状态二级联动VO»»
export interface IJSONResultList生产处理类型状态二级联动VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产处理类型状态二级联动VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理类型状态二级联动VO
export interface I生产处理类型状态二级联动VO {
    // 异常分类
    type: string;
    // 异常分类描述
    typeDesc: string;
    // 关联状态集
    statusList: I生产处理状态VO[];
}
// 生产处理状态VO
export interface I生产处理状态VO {
    // 异常状态
    status: string;
    // 异常状态描述
    statusDesc: string;
}
