import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/物料主数据比对相关/getMaterialCompareUsingPOST
export function fetchMethod(data: IMaterialMasterDataBomidCollectionVO, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/materialCompare/getCompare",
      data,
      params,
    });
}
// 物料主数据bom id集合VO
export interface IMaterialMasterDataBomidCollectionVO {
    // bomId集合
    bomIds: number[];
}
// JSONResult«List«物料主数据比对返回VO»»
export interface IJSONResultListReturnVOForMaterialMasterDataComparison {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialMasterDataComparisonReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料主数据比对返回VO
export interface IMaterialMasterDataComparisonReturnsVO {
    // 比对物料id
    compareMaterialId: number;
    // 比对物料名
    compareMaterialName: string;
    // 比对物料编号
    compareMaterialCode: string;
    // 比对物料版次号
    compareMaterialIssueCode: string;
    // 比对物料状态描述
    statusDesc: string;
    // 比对内容集
    details: IMaterialMasterDataComparisonDetailsReturnedToVO[];
}
// 物料主数据比对详情返回VO
export interface IMaterialMasterDataComparisonDetailsReturnedToVO {
    // 对应bomId
    bomId: number;
    // 对应bom名称
    bomName: string;
    // 计算消耗
    totalConsumeCount: number;
    // 对应工艺路径集
    routings: IProductionProcessPathBasicInformationVO[];
}
// 生产工艺路径基础信息VO
export interface IProductionProcessPathBasicInformationVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 是否默认
    isDefault: string;
    // 是否可用
    isValid: string;
}
