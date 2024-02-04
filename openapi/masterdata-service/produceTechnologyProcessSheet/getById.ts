// JSONResult«生产工艺工艺卡信息返回DTO»
export interface IJSONResult生产工艺工艺卡信息返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产工艺工艺卡信息返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产工艺工艺卡信息返回DTO
export interface I生产工艺工艺卡信息返回DTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 生产工艺id
    produceTechnologyId: number;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 描述集合
    textList: I生产工艺工艺卡明细返回DTO[];
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 工艺卡名称
    name: string;
    // 工艺卡编号
    code: string;
    // 工序id
    processId: number;
    // 物料id
    materialId: number;
    // 文件集合
    fileList: I生产工艺工艺卡明细返回DTO[];
    // 工序对应字段信息
    processFlowPathRpDatas: I工序对应字段详情VO[];
}
// 生产工艺工艺卡明细返回DTO
export interface I生产工艺工艺卡明细返回DTO {
    // 明细id
    id: number;
    // 明细类型
    type: string;
    // 明细名称/标题
    name: string;
    // 明细编号
    code: string;
    // 描述内容/备注
    remark: string;
    // 文件名称
    fileName: string;
    // 文件key
    fileKey: string;
    // 文件完整url
    fileUrl: string;
}
// 工序对应字段详情VO
export interface I工序对应字段详情VO {
    // 关联字段code
    fieldCode: string;
    // 关联字段名称
    fieldName: string;
    // 值
    value;
}
