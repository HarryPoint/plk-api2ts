// 进料扫描请求DTO
export interface I进料扫描请求DTO {
    // 生产任务id
    produceTaskId: number;
    // 最近物料id
    lastMaterialId: number;
    // 编号
    code: string;
}
// JSONResult«进料扫描响应对象DTO»
export interface IJSONResult进料扫描响应对象DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I进料扫描响应对象DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 进料扫描响应对象DTO
export interface I进料扫描响应对象DTO {
    // 进料设备
    moveInDevice: I进料设备响应DTO_1;
    // 进料模具
    moveInMold: I进料模具响应DTO_1;
    // 所需物料
    moveInMaterial: I进料bom消耗物料扫描响应DTO;
    // 外部码
    externalCodeResult: I进料bom消耗物料外部码扫描响应DTO;
}
// 进料设备响应DTO_1
export interface I进料设备响应DTO_1 {
    // 设备id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 生产工艺设备id
    produceTechnologyDeviceId: number[];
}
// 进料模具响应DTO_1
export interface I进料模具响应DTO_1 {
    // 模具id
    id: number;
    // 模具名称
    name: string;
    // 模具编号
    code: string;
    // 生产工艺模具id
    produceTechnologyMoldId: number[];
}
// 进料bom消耗物料扫描响应DTO
export interface I进料bom消耗物料扫描响应DTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
}
// 进料bom消耗物料外部码扫描响应DTO
export interface I进料bom消耗物料外部码扫描响应DTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 外部码
    externalCode: string;
}
