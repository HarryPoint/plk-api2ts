import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/库存查询相关/getMaterialStatisticsUsingPOST_1
export default function fetchMethod(data: IMaterialMasterDataInventorySearchVO, params: { enterpriseId: number }) {
    return post<IJSONResultMaterialInventoryStatisticsVO['data']>({
      url: "/masterdata-service/warehouseMaterial/getMaterialStatistics",
      data,
      params,
    });
}
// 物料主数据库存搜索VO
export interface IMaterialMasterDataInventorySearchVO {
    // 当前页面
    pageNo: number;
    // 物料名称
    materialName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 物料id集
    materialIds: number[];
    // 编号
    materialCode: string;
    // 规格
    materialSpec: string;
    // 仓库id
    storehouseIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«物料库存统计VO»
export interface IJSONResultMaterialInventoryStatisticsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialInventoryStatisticsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料库存统计VO
export interface IMaterialInventoryStatisticsVO {
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
    // 物料库存分页
    materialStorages: IPagingInformationMaterialMasterDataInventoryReturnsVO;
}
// 分页信息«物料主数据库存返回VO»
export interface IPagingInformationMaterialMasterDataInventoryReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IMaterialMasterDataInventoryReturnedToVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 物料主数据库存返回VO
export interface IMaterialMasterDataInventoryReturnedToVO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 规格
    spec: string;
    // 单位
    unit: string;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
}
