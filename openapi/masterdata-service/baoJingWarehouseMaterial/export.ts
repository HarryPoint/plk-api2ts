import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶即时库存查询相关/exportUsingPOST_2
*/
export default function fetchMethod(options: { data: IBaojingMaterialMasterDataInventorySearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶物料主数据库存搜索VO */
export interface IBaojingMaterialMasterDataInventorySearchVO {
    /** 业务员id集合 */
    businessUserIdList?: string[];
    /** 客户id集合 */
    customerIdList?: string[];
    /** 编号 */
    materialCode?: string;
    /** 保管员 */
    materialCurators?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 物料名称 */
    materialName?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 规格 */
    materialSpec?: string;
    /** 工艺 */
    materialTechnology?: string[];
    /** 材质 */
    materialTexture?: string[];
    /** 物料种类 */
    materialTypes?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 仓库id */
    storehouseIds?: string[];
    /** 仓库用途 */
    storehousePurposeList?: string[];
    /** 仓位id */
    warehouseIds?: string[];
    /** 仓位用途 */
    warehousePurposeList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
