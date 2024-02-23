import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/物料库存扫码相关服务/outStorageScanLotNoUsingPOST
export default function fetchMethod(data: ITheBatchNumberOfTheScanCodeForMaterialsLeavingTheWarehouseIsToBeQueried) {
    return http<IJSONResultListObjectReturnedToTheBatchNumberGroupForRetrievingMaterials>({
        url: "/app-enterprise-web/api/app/enterprise/warehouseStorageMaterialScan/outStorageScanLotNo",
        method: "post",
        data,
    });
}
// 物料出库扫码批次号查询对象
export interface ITheBatchNumberOfTheScanCodeForMaterialsLeavingTheWarehouseIsToBeQueried {
    // 流程id
    appId: number;
    // 通用：提交项， 用户编辑的数据
    formData: Record<string, Record<string, any>>;
    // 批次号
    lotNo: string;
}
// JSONResult«List«物料出库扫码批次号分组返回对象»»
export interface IJSONResultListObjectReturnedToTheBatchNumberGroupForRetrievingMaterials {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IObjectReturnedByTheBatchNumberGroupOfMaterialOutboundScanCode[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料出库扫码批次号分组返回对象
export interface IObjectReturnedByTheBatchNumberGroupOfMaterialOutboundScanCode {
    // 物料id
    materialId: number;
    // 明细数据
    details: IObjectReturnedByTheBatchNumberOfMaterialOutboundScanCode[];
}
// 物料出库扫码批次号返回对象
export interface IObjectReturnedByTheBatchNumberOfMaterialOutboundScanCode {
    // 库存id
    warehouseMaterialRpId: number;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编码
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 物料种类
    materialType: string;
    // 物料单位id
    materialUnitId: number;
    // 物料单位名称
    materialUnitName: string;
    // 批次号
    lotNo: string;
    // 仓库id
    storehouseId: number;
    // 仓库编号
    storehouseCode: string;
    // 仓库名称
    storehouseName: string;
    // 仓位id
    warehouseId: number;
    // 仓位code
    warehouseCode: string;
    // 仓位名称
    warehouseName: string;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
}
