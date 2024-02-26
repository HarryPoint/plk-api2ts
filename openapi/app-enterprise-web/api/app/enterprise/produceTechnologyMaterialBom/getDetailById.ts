import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产工艺工艺路径相关/getDetailByIdUsingGET_1
*/
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyMaterialBomInfoResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTechnologyMaterialBom/getDetailById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyMaterialBomInfoResponseDTO» */
export interface IJSONResultProduceTechnologyMaterialBomInfoResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProduceTechnologyMaterialBomInfoResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** ProduceTechnologyMaterialBomInfoResponseDTO */
export interface IProduceTechnologyMaterialBomInfoResponseDTO {
    /** 创建用户ID */
    createUserId: number;
    /** 创建用户名 */
    createUserName: string;
    /** 创建部门ID */
    createDeptId: number;
    /** 创建部门名称 */
    createDeptName: string;
    /** 更新部门ID */
    updateDeptId: number;
    /** 更新部门名称 */
    updateDeptName: string;
    /** 创建时间 */
    createTime: string;
    /** 生产工艺ID */
    produceTechnologyId: number;
    /** 更新用户ID */
    updateUserId: number;
    /** 更新用户名称 */
    updateUserName: string;
    /** 更新时间 */
    updateTime: string;
    /** id */
    id: number;
    /** 所属物料id */
    materialId: number;
    /** 所属物料名称 */
    materialName: string;
    /** 物料BOMid */
    materialBomId: number;
    /** bom名称 */
    name: string;
    /** bom编号 */
    code: string;
    /** 生产工艺物料BOM明细 */
    produceTechnologyMaterialBomDetailList: IProductionProcessMaterialBomDetailNodeResponseObject[];
}
/** 生产工艺物料Bom明细节点响应对象 */
export interface IProductionProcessMaterialBomDetailNodeResponseObject {
    /** 生产工艺物料bom明细id */
    produceTechnologyMaterialBomDetailId: number;
    /** 子物料id */
    childMaterialId: number;
    /** 子物料种类 */
    childMaterialType: string;
    /** 子物料名称 */
    childMaterialName: string;
    /** 子物料编号 */
    childMaterialCode: string;
    /** 子物料单位 */
    childMaterialUnit: string;
    /** 消耗数量 */
    totalConsumeCount: number;
}
