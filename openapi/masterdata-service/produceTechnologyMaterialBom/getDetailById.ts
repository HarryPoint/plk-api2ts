import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/produce-technology-material-bom-controller/getDetailByIdUsingGET_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyMaterialBomInfoResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyMaterialBom/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyMaterialBomInfoResponseDTO» */
export interface IJSONResultProduceTechnologyMaterialBomInfoResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceTechnologyMaterialBomInfoResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyMaterialBomInfoResponseDTO */
export interface IProduceTechnologyMaterialBomInfoResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 生产工艺ID */
    produceTechnologyId?: string;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 所属物料id */
    materialId?: string;
    /** 所属物料名称 */
    materialName?: string;
    /** 物料BOMid */
    materialBomId?: string;
    /** bom名称 */
    name?: string;
    /** bom编号 */
    code?: string;
    /** 生产工艺物料BOM明细 */
    produceTechnologyMaterialBomDetailList?: IProductionProcessMaterialBomDetailNodeResponseObject[];
}
/** 生产工艺物料Bom明细节点响应对象 */
export interface IProductionProcessMaterialBomDetailNodeResponseObject {
    /** 生产工艺物料bom明细id */
    produceTechnologyMaterialBomDetailId?: string;
    /** 子物料id */
    childMaterialId?: string;
    /** 子物料种类 */
    childMaterialType?: string;
    /** 子物料名称 */
    childMaterialName?: string;
    /** 子物料编号 */
    childMaterialCode?: string;
    /** 子物料单位 */
    childMaterialUnit?: string;
    /** 消耗数量 */
    totalConsumeCount?: number;
}
