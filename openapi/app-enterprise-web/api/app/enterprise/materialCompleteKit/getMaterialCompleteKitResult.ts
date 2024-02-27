import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/物料齐套相关/getMaterialCompleteKitResultUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialSetQueryRequestObject }, extraOptions?: any) {
    return http<IJSONResultQueryResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/materialCompleteKit/getMaterialCompleteKitResult",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料齐套查询请求对象 */
export interface IMaterialSetQueryRequestObject {
    /** 物料id */
    materialId: string;
    /** 标准工艺id */
    standardTechnologyId?: string;
    /** 需求数量 */
    needCount?: number;
}
/** JSONResult«物料齐套查询响应对象» */
export interface IJSONResultQueryResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialAssemblyQueryResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料齐套查询响应对象 */
export interface IMaterialAssemblyQueryResponseObject {
    /** 物料id */
    materialId?: string;
    /** bomId */
    bomId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 库存数量 */
    storageUseCount?: number;
    /** 需求数量 */
    needCount?: number;
    /** 差异数量 */
    diffCount?: number;
    /** 明细 */
    children?: IMaterialAssemblyQueryResponseObject[];
}
