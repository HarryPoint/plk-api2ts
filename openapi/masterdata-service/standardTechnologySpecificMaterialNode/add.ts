import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺具体物料节点相关/addUsingPOST_9
*/
export default function fetchMethod(options: { data: ITheRequestObjectIsAddedToTheSpecificMaterialNodeOfTheStandardProcess }, extraOptions?: any) {
    return http<IJSONResultMaterialBOMEditResponseObject>(
        {
            url: "/masterdata-service/standardTechnologySpecificMaterialNode/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺具体物料节点新增请求对象 */
export interface ITheRequestObjectIsAddedToTheSpecificMaterialNodeOfTheStandardProcess {
    /** BOM编号 */
    bomCode?: string;
    /** BOM明细 */
    bomDetailList: IAddARequestObjectForBomDetailsToTheMaterialNodeOfTheStandardProcess[];
    /** BOM名称 */
    bomName: string;
    /** 主物料id */
    id: string;
    /** 物料BOM详情id(针对所属上级bom的而言的详情id) */
    materialBomDetailId?: string;
    /** 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id */
    standardTechnologyId?: string;
    /** 消耗数量(针对所属上级bom而言的消耗数量) */
    totalConsumeCount?: number;
}
/** 标准工艺具体物料节点新增bom详情请求对象 */
export interface IAddARequestObjectForBomDetailsToTheMaterialNodeOfTheStandardProcess {
    /** 子物料id */
    id: string;
    /** 消耗数量 */
    totalConsumeCount: number;
}
/** JSONResult«物料BOM编辑响应对象» */
export interface IJSONResultMaterialBOMEditResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialBOMEditResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料BOM编辑响应对象 */
export interface IMaterialBOMEditResponseObject {
    /** 子物料列表 */
    childMaterialList?: IBomDetailsResponseObject[];
    /** bom code */
    code?: string;
    /** bom id */
    id?: string;
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
