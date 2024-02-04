// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«物料主数据选择返回VO»»
export interface IJSONResultList物料主数据选择返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialMasterDataSelectionIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料主数据选择返回VO
export interface IMaterialMasterDataSelectionIsReturnedToVO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料类型
    type: string;
    // 物料类型描述
    typeDesc: string;
    // 单位
    unit: string;
    // 规格
    spec: string;
    // 版次号
    issueCode: string;
    // 库存可使用数
    storageUseCount: number;
    // 是否有bom
    hasBom: string;
}
