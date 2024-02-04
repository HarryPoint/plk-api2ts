// JSONResult«List«质检项基础信息返回VO»»
export interface IJSONResultListBasicInformationAboutInspectionItemsVOIsReturned {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheBasicInformationAboutQualityInspectionItemsIsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检项基础信息返回VO
export interface ITheBasicInformationAboutQualityInspectionItemsIsReturnedToVO {
    // id
    id: number;
    // 质检项名称
    name: string;
    // 质检项编号
    code: string;
    // 质检方式
    qualityMethod: string;
    // 质检方式描述
    qualityMethodDesc: string;
    // 选择方式
    selectType: string;
    // 选择方式描述
    selectTypeDesc: string;
    // 选项内容集合
    selectors: ITheInspectionItemOptionReturnsVO[];
}
// 质检项选择项返回VO
export interface ITheInspectionItemOptionReturnsVO {
    // 选择项名称
    name: string;
}
