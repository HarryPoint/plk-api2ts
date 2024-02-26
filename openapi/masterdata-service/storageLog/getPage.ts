import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/库存流水相关/getPageUsingPOST_30
*/
export default function fetchMethod(data: IInventoryFlowSearchVO, params: { enterpriseId: number; masterDataFlowPathCode: string }, extraOptions?: any) {
    return http<IJSONResultPagingInformationInventoryReturnsVO>(
        {
            url: "/masterdata-service/storageLog/getPage",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 库存流水搜索VO */
export interface IInventoryFlowSearchVO {
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 业务主数据id（eg:物料id） */
    masterDataIdList: number[];
    /** 流程id(工单类型) */
    flowPathId: number;
    /** 批次号 */
    lotNo: string;
    /** 创建时间-开始 yyyy-MM-dd HH:mm:ss */
    billCreateTimeBegin: string;
    /** 创建时间-结束 yyyy-MM-dd HH:mm:ss */
    billCreateTimeEnd: string;
    /** 单据名称 - 模糊匹配 */
    billNameMatch: string;
    /** 仓位id集 */
    warehouseIds: number[];
    /** 单据时间-开始 yyyy-MM-dd HH:mm:ss */
    billDateBegin: string;
    /** 单据时间-结束 yyyy-MM-dd HH:mm:ss */
    billDateEnd: string;
    /** 单据编号 - 模糊匹配 */
    businessNoMatch: string;
    /** 仓库ID-批量查询 */
    storehouseIdList: number[];
    /** 区域ID-批量查询 */
    opAreaIdList: number[];
    /** 计量单位ID-批量查询 */
    unitIdList: number[];
    /** 收入数量-开始 */
    inQuantityBegin: number;
    /** 收入数量-结束 */
    inQuantityEnd: number;
    /** 操作人 - 批量查询 */
    operatorUserIdList: number[];
    /** 发出数量-开始 */
    outQuantityBegin: number;
    /** 发出数量-结束 */
    outQuantityEnd: number;
    /** 创建用户 - 批量查询 */
    billCreateUserIdList: number[];
    /** 剩余量-开始 */
    storageTotalCountBegin: number;
    /** 剩余量-结束 */
    storageTotalCountEnd: number;
    /** 创建部门 - 批量查询 */
    billCreateDeptIdList: number[];
    /** 业务状态 - 批量查询 */
    businessStatusList: string[];
    /** 库存更新时间-结束 yyyy-MM-dd HH:mm:ss */
    updateTimeEnd: string;
    /** 流程进度 - 模糊查询 */
    processStatusMatch: string;
    /** 库存更新部门ID */
    updateDeptIdList: number[];
    /** 库存更新时间-开始 yyyy-MM-dd HH:mm:ss */
    updateTimeBegin: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«分页信息«库存流水返回VO»» */
export interface IJSONResultPagingInformationInventoryReturnsVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPagingInformationInventoryFlowReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«库存流水返回VO» */
export interface IPagingInformationInventoryFlowReturnsVO {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IStockFlowBackToVO[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** 库存流水返回VO */
export interface IStockFlowBackToVO {
    /** id */
    id: number;
    /** 所属业务主数据id */
    masterDataId: number;
    /** 所属物料名称 */
    materialName: string;
    /** 所属物料编号 */
    materialCode: string;
    /** 所属物料规格型号 */
    materialSpec: string;
    /** 所属物料单位 */
    materialUnit: string;
    /** 流水类型 */
    flowType: string;
    /** 流水类型描述 */
    flowTypeDesc: string;
    /** 操作区域id */
    opAreaId: number;
    /** 操作区域名称 */
    opAreaName: string;
    /** 操作仓库id */
    opStorehouseId: number;
    /** 仓库名称 */
    opStorehouseName: string;
    /** 操作库类型 */
    opWarehouseType: string;
    /** 操作仓位id */
    opWarehouseId: number;
    /** 操作仓位层级，从高至低排列 */
    warehouseList: IIdNameNumberVO[];
    /** 对应工单id */
    workOrderId: number;
    /** 对应工单数据id */
    workOrderDataId: number;
    /** 业务id */
    businessId: number;
    /** 业务编号(工单编号) */
    businessNo: string;
    /** 对应流程id */
    flowPathId: number;
    /** 对应流程版本id */
    flowPathVersionId: number;
    /** 对应流程名称 */
    flowPathName: string;
    /** 对应流程编号 */
    flowPathCode: string;
    /** 批次号 */
    lotNo: string;
    /** 数量 */
    quantity: number;
    /** 库存剩余总数 */
    storageTotalCount: number;
    /** 库存剩余锁定数 */
    storageLockCount: number;
    /** 库存剩余可使用数 */
    storageUseCount: number;
    /** 操作人ID */
    operatorUserId: number;
    /** 操作人姓名 */
    operatorUserName: string;
    /** 单据日期 */
    billDate: string;
    /** 单据名称 */
    billName: string;
    /** 发入数量 */
    inQuantity: number;
    /** 发出数量 */
    outQuantity: number;
    /** 流程进度 */
    processStatus: string;
    /** 业务状态 */
    businessStatus: string;
    /** 业务状态描述 */
    businessStatusDesc: string;
    /** 单位ID */
    unitId: number;
    /** 单位名称 */
    unitName: string;
    /** 单据创建人 */
    billCreateUserId: number;
    /** 单据创建人名称 */
    billCreateUserName: string;
    /** 单据创建部门ID */
    billCreateDeptId: number;
    /** 单据创建部门名称 */
    billCreateDeptName: string;
    /** undefined */
    billCreateTime: string;
    /** 库存更新部门ID */
    updateDeptId: number;
    /** 库存更新部门名称 */
    updateDeptName: string;
    /** 库存更新时间 */
    updateTime: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
