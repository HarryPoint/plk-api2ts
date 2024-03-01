import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺具体物料节点相关/getBomUsedStandardTechnologyUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessQueryObjectUsedByBom }, extraOptions?: any) {
    return http<IJSONResultListBomStandardProcessResponse>(
        {
            url: "/masterdata-service/standardTechnologySpecificMaterialNode/getBomUsedStandardTechnology",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** bom占用的标准工艺查询对象 */
export interface IStandardProcessQueryObjectUsedByBom {
    /** bomId */
    bomId: string;
    /** 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id */
    standardTechnologyId?: string;
}
/** JSONResult«List«bom占用的标准工艺响应»» */
export interface IJSONResultListBomStandardProcessResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IStandardProcessResponseToBomOccupancy[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** bom占用的标准工艺响应 */
export interface IStandardProcessResponseToBomOccupancy {
    /** 所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 标准工艺id */
    standardTechnologyId?: string;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
}
