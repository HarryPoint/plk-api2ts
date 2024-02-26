import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/exportUsingPOST_2
*/
export default function fetchMethod(data: IBaojingMaterialMasterDataInventorySearchVO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/export",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 宝晶物料主数据库存搜索VO */
export interface IBaojingMaterialMasterDataInventorySearchVO {
    /** 物料id集 */
    materialIds?: number[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 物料名称 */
    materialName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 规格 */
    materialSpec?: string;
    /** 仓库id */
    storehouseIds?: number[];
    /** 物料种类 */
    materialTypes?: string[];
    /** 编号 */
    materialCode?: string;
    /** 仓库用途 */
    storehousePurposeList?: string[];
    /** 保管员 */
    materialCurators?: string[];
    /** 仓位用途 */
    warehousePurposeList?: string[];
    /** 材质 */
    materialTexture?: string[];
    /** 业务员id集合 */
    businessUserIdList?: number[];
    /** 工艺 */
    materialTechnology?: string[];
    /** 客户id集合 */
    customerIdList?: number[];
    /** 仓位id */
    warehouseIds?: number[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
