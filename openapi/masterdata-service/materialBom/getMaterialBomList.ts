import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料Bom相关/getMaterialBomListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialBomQueriesTheRequestedObject }, extraOptions?: any) {
    return http<IJSONResultListMaterialBomResponseObject>(
        {
            url: "/masterdata-service/materialBom/getMaterialBomList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料bom查询请求对象 */
export interface IMaterialBomQueriesTheRequestedObject {
    /** 物料id */
    materialId: string;
}
/** JSONResult«List«物料bom响应对象»» */
export interface IJSONResultListMaterialBomResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBomRespondsToTheObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料bom响应对象 */
export interface IBomRespondsToTheObject {
    /** bom编号 */
    bomCode?: string;
    /** bomId */
    bomId?: string;
    /** bom名称 */
    bomName?: string;
    /** 子物料列表 */
    childMaterialList?: IBomDetailsResponseObject[];
    /** 主物料编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 主物料Id */
    id?: string;
    /** 是否是默认BOM */
    isDefault?: EBomRespondsToTheObject_isDefault;
    /** 主物料名称 */
    name?: string;
    /** 主物料类型 */
    type?: string;
    /** 主物料类型名称 */
    typeName?: string;
    /** 物料单位 */
    unit?: string;
}
/** 物料bom详情响应对象 */
export interface IBomDetailsResponseObject {
    /** 子物料编号 */
    code?: string;
    /** 子物料id */
    id?: string;
    /** 物料BOM详情id */
    materialBomDetailId?: string;
    /** 所属物料bom id */
    materialBomId?: string;
    /** 子物料名称 */
    name?: string;
    /** 消耗数量 */
    totalConsumeCount?: number;
    /** 子物料类型 */
    type?: string;
    /** 子物料类型名称 */
    typeName?: string;
    /** 物料单位 */
    unit?: string;
}

export enum EBomRespondsToTheObject_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
