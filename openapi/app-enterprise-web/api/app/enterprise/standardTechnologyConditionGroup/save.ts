// 标准工艺条件组保存DTO
export interface IDtosAreStoredInStandardProcessConditionsGroup {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 标准工艺条件
    conditionList: IDtosAreStoredUnderStandardProcessConditions[];
}
// 标准工艺条件保存DTO
export interface IDtosAreStoredUnderStandardProcessConditions {
    // 来源应用编号
    fromFlowPathCode: string;
    // 来源字段编号
    fromFieldCode: string;
    // 来源字段序列号
    fromFieldSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断的值
    compareValue: string;
    // 连接类型
    joinType: string;
}
// JSONResult«标准工艺条件组保存响应DTO»
export interface IJSONResultStandardProcessConditionGroupSavesResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IStandardProcessConditionGroupSavesResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 标准工艺条件组保存响应DTO
export interface IStandardProcessConditionGroupSavesResponseDTO {
    // 条件组id
    id: number;
}
