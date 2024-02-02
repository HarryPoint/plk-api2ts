// JSONResult«List«工序字段对应表详情VO»»
export interface IJSONResultList工序字段对应表详情VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工序字段对应表详情VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序字段对应表详情VO
export interface I工序字段对应表详情VO {
    // id
    id: number;
    // 工序id
    processId: number;
    // 关联表单id
    flowPathId: number;
    // 关联表单编号
    flowPathCode: string;
    // 系统流程类型
    flowPathSystemType: string;
    // 关联字段列表
    fieldList: I工序字段对应表字段详情VO[];
}
// 工序字段对应表字段详情VO
export interface I工序字段对应表字段详情VO {
    // 流程表格列表id
    flowPathTableColumnId: number;
    // 是否表格字段
    isTableField: string;
    // 流程字段所属表编号(主表字段是主表编号，子表字段是子表编号)
    tableCode: string;
    // 流程字段编号
    flowPathFormFieldCode: string;
    // 流程字段序列号
    flowPathFormFieldSerialNo: string;
}
